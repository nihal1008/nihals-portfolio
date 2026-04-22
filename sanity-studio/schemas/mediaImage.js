export default {
  name: 'mediaImage',
  title: 'Image Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image File',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
