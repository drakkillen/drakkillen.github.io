if (localStorage.getItem("mats") != null) {
  tempList = JSON.parse(localStorage.mats);
  for (x in tempList) {
    if (!tempList[x] || !compsList[x]) {
      continue;
    } else {
      compsList[x].qty = tempList[x].qty;
    }
  }
}
