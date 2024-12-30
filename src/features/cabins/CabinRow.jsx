/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useState } from "react";

import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import useDeleteCabin from "./useDeleteCabin";
import { HiDuplicate, HiPencil, HiTrash } from "react-icons/hi";
import useCreateCabin from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
function CabinRow({ cabin }) {
  const [isShowing, setIsShowing] = useState(false);
  const { isDeleting, deleteCabins } = useDeleteCabin();

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  } = cabin;

  const { isWorking, createCabin } = useCreateCabin();
  function handleDuplicate() {
    // console.log(createCabin);
    createCabin({
      name: `copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
    });
  }

  return (
    <>
      <Table.Row role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <button
            disabled={isWorking}
            onClick={handleDuplicate}>
            <HiDuplicate />
          </button>
          <Modal>
            <Modal.ToggleButton opens="edit">
              <button>
                <HiPencil />
              </button>
            </Modal.ToggleButton>
            <Modal.Window name="edit">
              <CreateCabinForm CabinToEdit={cabin} />
            </Modal.Window>

            <Modal.ToggleButton opens="delete">
              <button>
                <HiTrash />
              </button>
            </Modal.ToggleButton>
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cabin"
                disabled={isDeleting}
                onConfirm={() => deleteCabins(cabinId)}
                
              />
            </Modal.Window>
          </Modal>
        </div> 
      </Table.Row>
    </>
  );
}

export default CabinRow;