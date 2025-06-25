import React from "react";


// Define the props type for the HighlightBox component


const HighlightBox = ({ title, value, Icon }) => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f8bbd0 0%, #b388ff 100%)",
        color: "#fff",
        padding: "1.2rem",
        borderRadius: "1rem",
        width: "200px",
        height: "90px",
        boxShadow: "0 4px 16px 0 rgba(179,136,255,0.15), 0 1.5px 4px 0 rgba(248,187,208,0.15)",
        fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
        border: "1.5px solid #fff",
        transition: "transform 0.2s",
      }}
    >
      <div>
        <div style={{ fontSize: "19px", fontWeight: 600, letterSpacing: "0.5px" }}>{title}</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "0.5rem",
          }}
        >
          <Icon style={{ fontSize: "32px", opacity: 0.85 }} />
          <p style={{ fontSize: "32px", margin: 0, fontWeight: 500 }}>{value}</p>
        </div>
      </div>
    </div>
  );
};

export default HighlightBox;