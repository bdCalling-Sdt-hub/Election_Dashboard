import { Form, Modal } from "antd";
import React from "react";

const FaqModal = ({ openAddModel, setOpenAddModel }) => {
  return (
    <Modal
      centered
      open={openAddModel}
      onCancel={() => setOpenAddModel(false)}
      width={500}
      footer={false}
    >
      <div className="p-6">
        <h1
          className=" text-[20px] font-medium"
          style={{ marginBottom: "12px" }}
        >
          Add FAQ
        </h1>
        <Form>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Question
            </label>
            <input
              type="Text"
              placeholder="Enter Question"
              style={{
                border: "1px solid #E0E4EC",
                padding: "10px",
                height: "52px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
                width: "100%",
              }}
              name="question"
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Answer
            </label>
            <textarea
              type="Text"
              placeholder="Enter answer"
              style={{
                border: "1px solid #E0E4EC",
                padding: "10px",
                height: "152px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
                width: "100%",
                resize: "none",
              }}
            />
          </div>
          <div className=" text-end">
            <input
              className="cursor-pointer"
              htmlType="submit"
              block
              style={{
                border: "none",
                height: "44px",
                background: "#07254A",
                color: "white",
                borderRadius: "8px",
                outline: "none",
                padding: "10px 20px",
              }}
              value={`Submit`}
              type="submit"
            />
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default FaqModal;
