export default {
  name: 'mediaVideo',
  title: 'Videos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Video Title',
      type: 'string',
    },
    {
      name: 'duration',
      title: 'Duration (e.g. 3:24)',
      type: 'string',
    },
    {
      name: 'size',
      title: 'File Size (e.g. 45 MB)',
      type: 'string',
    },
    {
      name: 'videoAsset',
      title: 'Upload Video (MP4)',
      type: 'file',
    },
  ],
}
