export default function Task({ name, completed }) {
  return (
    <div>
      <label>
        <input type="checkbox" defaultChecked={completed} />
        {name}
      </label>
    </div>
  );
}