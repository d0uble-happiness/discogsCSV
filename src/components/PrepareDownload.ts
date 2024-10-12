import { ROW_NAMES } from './RowNames'

export default {
  name: 'PrepareDownload',
  methods: {
    prepareDownload
  }
}

export function prepareDownload(data: any[]) {
  const csvRows = [ROW_NAMES.join(','), ...data.map((e) => e.join(','))].join('\n')

  const encodedUri = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvRows)
  const link = document.createElement('a')
  link.setAttribute('href', encodedUri)
  link.setAttribute('download', 'my_data.csv')
  document.body.appendChild(link) // Required for Firefox
  link.click()
}
