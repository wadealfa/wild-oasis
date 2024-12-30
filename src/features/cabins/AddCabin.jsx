import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

function AddCabin() {
  return (
    <Modal>
      <Modal.ToggleButton opens="form">
        <Button>Add a Cabin</Button>
      </Modal.ToggleButton>
      <Modal.Window name="form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddCabin;
// function AddCabin() {
//   const [showForm, setShowForm] = useState(false);
//   return (
//     <>
//       <Button onClick={() => setShowForm(!showForm)}>Add a Cabin</Button>

//       {/* {showForm && <CreateCabinForm />} */}
//       {showForm && (
//         <Modal onClose={() => setShowForm(false)}>
//           <CreateCabinForm onCloseModal={() => setShowForm(false)} />
//         </Modal>
//       )}
//     </>
//   );
// }

// export default AddCabin;
