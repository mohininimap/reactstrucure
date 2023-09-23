import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "../formikcontrols";
import { Modal, Button } from "react-bootstrap";
import "./TechnologyModal.scss";

import { useDispatch } from "react-redux";
// import {
//   reasonMasterCreateStart,
//   reasonMasterUpdateStart,
// } from "../../../redux/actions/masterActions";

const ReasonMasterModal = ({
  isOpen,
  closeModal,
  searchValue,
  fromTo,
  head,
  order,
  data = {},
}) => {
  const dispatch = useDispatch();

  const initialValues = {
    description: "",
  };

  const validationSchema = Yup.object().shape({
    description: Yup
      .string()
      .required("Reason is Required")
      .max(255, "Maximum 255 characters allowed")
      .nullable(),
  });

  const handleSubmit = (values) => {
    console.log("values", values);
    if (Object.keys(data).length === 0) {
      // dispatch(reasonMasterCreateStart(values));
      closeModal();
    } else {
      // dispatch(reasonMasterUpdateStart(values));
      closeModal();
    }
    closeModal();
  };

  return (
    <div>
      {isOpen && (
        <Modal
          show={isOpen}
          onHide={closeModal}
          backdrop="static"
          keyboard={false}
          size="sm"
          centered
        >
          <Modal.Header>
            <h4>
            {Object.keys(data).length === 0 ? <div><span className="modal__sec--head">Add</span> Reason Master</div> : <div><span className="modal__sec--head">Update</span> Reason Master</div>}
              
            </h4>
          </Modal.Header>

          <div className="addLeaving__form__head__content">
            <Formik
              initialValues={
                Object.keys(data).length === 0 ? initialValues : data
              }
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {(formik) => {
                return (
                  <Modal.Body>
                    <Form className="modal__sec--body-form-1">
                      <FormikControl
                        control="input"
                        label="Reason"
                        form={formik}
                        name="description"
                        req={true}
                        //   maxLength={30}
                      />

                      <Modal.Footer className="modal__sec--body-form-bottom-1">
                        <Button type="submit" className="modal__sec--btn">
                          {Object.keys(data).length === 0 ? "Add" : "Update"}
                        </Button>
                        <Button
                          className="modal__sec--btn modal__sec--btn-close"
                          onClick={closeModal}
                        >
                          Close
                        </Button>
                      </Modal.Footer>
                    </Form>
                  </Modal.Body>
                );
              }}
            </Formik>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ReasonMasterModal;
