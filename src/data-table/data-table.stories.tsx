import React from 'react'
import { DataTable } from './data-table'

export default {
  title: 'Layouts/DataTable',
  parameters: {
    centered: { disable: true }
  }
}

const columns = [{
  name: 'First column',
  selector: row => row.someKey,
  sortable: true
}, {
  name: 'Second column',
  selector: row => row.someKey,
  sortable: true
}, {
  name: 'Third column',
  selector: row => row.someKey
}]

const data = [{
  id: 1,
  someKey: 'Some data to print',
  anotherKey: 'Another key data',
  anyOtherKey: 'Any other key data'
}, {
  id: 2,
  someKey: 'Some data to print 2',
  anotherKey: 'Another key data 2',
  anyOtherKey: 'Any other key data 2'
}, {
  id: 3,
  someKey: 'Some data to print 3',
  anotherKey: 'Another key data 3',
  anyOtherKey: 'Any other key data 3'
}, {
  id: 4,
  someKey: 'Some data to print 4',
  anotherKey: 'Another key data 4',
  anyOtherKey: 'Any other key data 4'
}
]

const ExpndableComponent = ({ data }: Record<string, any>) => (
  <table width="100%">
    <thead><tr>{Object.keys(data).map(key => <th style={{ textAlign: 'left' }}>{key}</th>)}</tr></thead>
    <tbody>
      <tr>{Object.keys(data).map(key => <td>{data[key]}</td>)}</tr>
    </tbody>
  </table>
)

const Template = (args) => (
  <DataTable
    columns={columns}
    data={data}
    {...args}
  />
)

export const Simple = Template.bind({})

export const ExpandableRows = Template.bind({})
ExpandableRows.args = {
  ExpandableRowsComponent: ExpndableComponent,
  pagination: true,
  striped: true
}

export const InteractiveRows = Template.bind({})
InteractiveRows.args = {
  pointerOnHover: true,
  onRowClicked: (row: Record<string, any>) => console.log(row),
  pagination: true,
  striped: true,
  highlightOnHover: true
}

export const SelectableRows = Template.bind({})
SelectableRows.args = {
  pagination: true,
  selectableRows: true,
  selectableRowsHighlight: true
}

export const LoadingState = Template.bind({})
LoadingState.args = {
  progressPending: true,
  pagination: true
}
