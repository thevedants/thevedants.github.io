function showList(sectionId) {
    const lists = document.querySelectorAll('.list');
    lists.forEach(list => list.style.display = 'none');
    
    const selectedList = document.getElementById(sectionId);
    selectedList.style.display = 'block';
  }
  