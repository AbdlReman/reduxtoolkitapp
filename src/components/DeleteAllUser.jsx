import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/slices/UserSlice";

export const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteAll = () => {
    dispatch(deleteUser());
  };

  return (
    <div>
      <button className="btn add-btn" onClick={deleteAll}>
        Delete All Users
      </button>
    </div>
  );
};
