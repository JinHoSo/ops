import * as React from 'react'
import {connect} from 'react-redux'
import {actions, ActionCreators, RootState} from '../redux/index'
import {NewsState} from '../redux/news/index'
import {BootstrapTable as Table, TableHeaderColumn as Th} from 'react-bootstrap-table'

interface S extends NewsState {
}

interface O {
}

type Props = S & ActionCreators & O
export const News = connect<S, ActionCreators, O>(
  (state: RootState) => state.news,
  actions
)(
  class News extends React.Component<Props, {}> {
    render() {
      return (
        <Table data={this.props.list} options={{noDataText: '데이터가 없습니다.'}}>
          <Th width="80" dataField="번호" dataAlign="center" isKey>번호</Th>
          <Th width="100" dataField="name" dataAlign="center">소스</Th>
          <Th width="160" dataField="_" dataAlign="center" dataFormat={this.formatId}>크롤링일자</Th>
          <Th width="160" dataField="작성일자" dataAlign="center">작성일자</Th>
          <Th dataField="제목" dataAlign="center" dataFormat={this.formatTitle}>제목</Th>
          <Th width="80" dataField="조회수" dataAlign="center">조회수</Th>
          <Th width="160" dataField="접수일정" dataAlign="center">접수일정</Th>
          <Th width="80" dataField="상태" dataAlign="center">상태</Th>
        </Table>
      )
    }

    componentDidMount() {
      this.props.getNews()
    }

    private formatId(cell, row) {
      const date = new Date(parseInt(row._id.substring(0, 8), 16) * 1000)
      return <div>{date.toISOString().slice(0, 10)}</div>
    }

    private formatTitle(cell, row) {
      return <a href={row.url} target="_blank">{cell}</a>
    }
  }
)

