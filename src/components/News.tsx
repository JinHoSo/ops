import * as React from 'react'
import {connect} from 'react-redux'
import {actions, DispatchProps, RootState} from '../redux/index'
import {NewsState} from '../redux/news/index'
import {BootstrapTable as Table, TableHeaderColumn as Th} from 'react-bootstrap-table'
import {SystemState} from '../redux/system/index'
import {HALF_DAY} from '../constants/index'
import {Style} from './Style'
import stylesheet from './News.pcss'
import {PersistState} from '../redux/persist/index'
import * as classnames from 'classnames'

interface S extends NewsState, SystemState, PersistState {
}

interface O {
}

type Props = S & DispatchProps & O
export const News = connect<S, DispatchProps, O>(
  (state: RootState) => ({
    ...state.news,
    ...state.system,
    ...state.persist
  }),
  actions
)(
  class News extends React.Component<Props, {}> {
    static md_hidden = 'hidden-md-down'
    static defaultProps = {
      list: [],
      loading: true
    }

    constructor(props) {
      super(props)
      this.formatBookmark = this.formatBookmark.bind(this)
    }

    render() {
      const {list, loading} = this.props
      const hiddenCloumnProps = {className: News.md_hidden, columnClassName: News.md_hidden}

      return (
        <div>
          <Style>{stylesheet}</Style>
          {!loading && <h4>{list.length}</h4>}
          <Table data={list} options={{noDataText: this.noText(loading)}} trClassName={News.highlightIn24Hours}>
            <Th width="80" dataField="번호" dataAlign="center" isKey {...hiddenCloumnProps} >번호</Th>
            <Th width="110" dataField="name" dataAlign="center">소스</Th>
            <Th width="110" dataField="_" dataAlign="center" dataFormat={this.formatId}>크롤링일자</Th>
            <Th width="110" dataField="작성일자" dataAlign="center" {...hiddenCloumnProps}>작성일자</Th>
            <Th dataField="제목" dataAlign="center" dataFormat={this.formatTitle}>제목</Th>
            <Th width="110" dataField="접수일정" dataAlign="center" {...hiddenCloumnProps}>접수일정</Th>
            <Th width="70" dataField="bookmarkers" dataAlign="center" {...hiddenCloumnProps} dataFormat={this.formatBookmarkers}>
              <i className={'fa fa-users fa-lg'} />
            </Th>
            <Th width="60" dataField="_" dataAlign="center" dataFormat={this.formatBookmark}>
              <i className={'fa fa-heart fa-lg'} />
            </Th>
          </Table>
        </div>
      )
    }

    componentDidMount() {
      if (this.props.boot) {
        this.props.actions.getNews()
      }
    }

    componentWillReceiveProps(props) {
      if (!this.props.boot && props.boot) {
        this.props.actions.getNews()
      }
    }

    private static highlightIn24Hours(row, cell) {
      const date = News.extractDateFromId(row._id).getTime()
      if (News.isIn12Hours(date)) {
        return 'text-bold'
      }
    }

    private static isIn12Hours(date) {
      return Date.now() - date < HALF_DAY
    }

    private static extractDateFromId(id) {
      return new Date(parseInt(id.substring(0, 8), 16) * 1000)
    }

    private formatId(cell, row) {
      const date = News.extractDateFromId(row._id)
      if (News.isIn12Hours(date)) {
        return <div>{date.toISOString().slice(11, 19)}</div>
      }
      return <div>{date.toISOString().slice(0, 10)}</div>
    }

    private formatTitle(cell, row) {
      return <a href={row.url} target="_blank">{cell}</a>
    }

    private formatBookmarkers(cell, {_id, bookmarkers = []}) {
      const placeholder = 'https://cad.onshape.com/images/placeholder-user.png'
      const people = bookmarkers
        .reverse()
        .slice(0, 3)
      const imageProps = {
        width: 32,
        height: 32,
        className: 'like-user-photo'
      }

      return (
        <div title={`${bookmarkers.length} 명이 좋아합니다.`}>
          {people.map(person => <img src={person.photo||placeholder} alt={person.name} {...imageProps} />)}
          {bookmarkers.length > 3 && <img src={placeholder} alt=""  {...imageProps} />}
        </div>
      )
    }

    private formatBookmark(cell, {_id, bookmarkers = []}) {
      const bookmarker = Boolean(bookmarkers.find(bookmarker => bookmarker.name === this.props.userInfo.name))

      return (
        <i
          className={classnames('fa fa-lg', {'fa-heart-o': !bookmarker, 'fa-heart': bookmarker})}
          onClick={bookmarker
            ? this.props.actions.unBookmarkNews.bind(null, _id)
            : this.props.actions.bookmarkNews.bind(null, _id)
          }
        />
      )
    }

    private noText(loading) {
      return loading
        ? (
          <p className="text-center">
            <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
            <span className="sr-only">로딩중...</span>
          </p>
        )
        : '데이터가 없습니다.'
    }
  }
)

