export default {
  name: 'mediaDocument',
  title: 'Documents',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Document Title',
      type: 'string',
    },
    {
      name: 'size',
      title: 'File Size (e.g. 2.4 MB)',
      type: 'string',
    },
    {
      name: 'fileAsset',
      title: 'Upload Document (PDF, DOCX)',
      type: 'file',
    },
  ],
}
