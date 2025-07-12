"use client";

function TesButton({ label }) {
    const handleClick = () => {
        console.log("Button Clicked");
    };

    return (
        <button
            onClick={handleClick}
            style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#0056b3"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#007bff"}
        >
            {label}
        </button>
    );
}

export { TesButton };
