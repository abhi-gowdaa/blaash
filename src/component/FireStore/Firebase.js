export default function TransformData(firebaseData) {
  const firebaseArray = firebaseData._document.data.value.mapValue.fields.data.arrayValue.values;

  return firebaseArray.map((firebaseElement, index) => {
    const fields = firebaseElement?.mapValue?.fields;
    if (!fields) {
      console.warn(`Element at index ${index} is missing required fields:`, firebaseElement);
      return null;  
    }

    return {
      kind: fields.kind?.stringValue || "Unknown kind",
      etag: fields.etag?.stringValue || "Unknown etag",
      id: fields.id?.stringValue || "Unknown id",
      snippet: {
        publishedAt: fields.snippet?.mapValue?.fields?.publishedAt?.stringValue || "Unknown date",
        channelId: fields.snippet?.mapValue?.fields?.channelId?.stringValue || "Unknown channel",
        title: fields.snippet?.mapValue?.fields?.title?.stringValue || "Unknown title",
        description: fields.snippet?.mapValue?.fields?.description?.stringValue || "No description",
        thumbnails: {
          default: {
            url: fields.snippet?.mapValue?.fields?.thumbnails?.mapValue?.fields?.default?.mapValue?.fields?.url?.stringValue || "",
            width: fields.snippet?.mapValue?.fields?.thumbnails?.mapValue?.fields?.default?.mapValue?.fields?.width?.integerValue || 0,
            height: fields.snippet?.mapValue?.fields?.thumbnails?.mapValue?.fields?.default?.mapValue?.fields?.height?.integerValue || 0,
          },
          // Add other thumbnail sizes here similarly
        },
        channelTitle: fields.snippet?.mapValue?.fields?.channelTitle?.stringValue || "Unknown channel title",
        localized: {
          title: fields.snippet?.mapValue?.fields?.localized?.mapValue?.fields?.title?.stringValue || "Unknown localized title",
          description: fields.snippet?.mapValue?.fields?.localized?.mapValue?.fields?.description?.stringValue || "No localized description",
        },
      },
      contentDetails: {
        itemCount: fields.contentDetails?.mapValue?.fields?.itemCount?.integerValue || 0,
      },
    };
  }).filter(Boolean); // Remove null elements
}
