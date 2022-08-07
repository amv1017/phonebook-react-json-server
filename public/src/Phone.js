export default ({ id, name, phone }) => {
  const onDelete = async () => {
    await fetch(`http://localhost:8080/phones/${id}`, {
      method: 'DELETE'
    })
    window.onload = setTimeout("location.reload(true);")
  }

  return (<li key={id}>
    <>{name}: {phone}</>
    <div onClick={onDelete}>×</div>
  </li>)
}
