async function CheckIfHasSpace(client, spaceToEnsureGB) {
  console.log("CheckIfHasSpace");

  let maxAllowedUsage, totalFilesSize; // 单位均为GB

  if (!client.boxConfig.max_disk_usage_size_gb)
    return { hasSpace: true, spaceToFreeUp: 0, filesList: null };

  maxAllowedUsage = client.boxConfig.max_disk_usage_size_gb;

  try {
    let filesList = await client.getTorrentsList();
    totalFilesSize = filesList.map(_ => _.size).reduce((a, b) => (a + b), 0) / 1024 / 1024 / 1024;
    console.log("totalFilesSize", totalFilesSize, "spaceToEnsureGB", spaceToEnsureGB, "maxAllowedUsage", maxAllowedUsage);
    if (totalFilesSize + spaceToEnsureGB > maxAllowedUsage) {
      let spaceToFreeUp = totalFilesSize + spaceToEnsureGB - maxAllowedUsage;
      return { hasSpace: false, spaceToFreeUp, filesList };
    } else {
      return { hasSpace: true, spaceToFreeUp: 0, filesList };
    }
  } catch (exception) {
    console.error("/query/torrents failed, box id " + client.boxConfig.id);
    return { hasSpace: false, spaceToFreeUp: 0, filesList: null };
  }
}

export { CheckIfHasSpace };