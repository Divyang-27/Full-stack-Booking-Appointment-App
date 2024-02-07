let myObj = {};
const parentele = document.getElementById('list-of-items');
function displayUser(e) {
  e.preventDefault();
  let name = e.target.name.value;
  let mail = e.target.mail.value;
  let number = e.target.number.value;
  myObj = {
    name: name,
    mail: mail,
    number: number,
  };
  axios
    .post('http://localhost:4000', myObj)
    .then((response) => addToDisplay(response.data.newUserDetails));
}
function addToDisplay(myObj) {
  const lchild = document.createElement('li');
  lchild.textContent = myObj.name + ' ' + myObj.mail + ' ' + myObj.number;
  lchild.style.color = 'black';
  const del = document.createElement('button');
  del.textContent = 'Delete';
  del.onclick = () => {
    axios.delete(`http://localhost:4000/get-user/${myObj.id}`);
    parentele.removeChild(lchild);
  };
  const edit = document.createElement('button');
  edit.textContent = 'Edit';
  edit.onclick = () => {
    axios.delete(`http://localhost:4000/get-user/${myObj.id}`);
    document.getElementById('name').value = myObj.name;
    document.getElementById('mail').value = myObj.mail;
    document.getElementById('number').value = myObj.number;
    parentele.removeChild(lchild);
  };
  lchild.appendChild(edit);
  lchild.appendChild(del);
  parentele.appendChild(lchild);
}
window.onload = async function () {
  const data = await axios.get('http://localhost:4000/get-user');
  data.data.allUserDetails.forEach((res) => addToDisplay(res));
};
