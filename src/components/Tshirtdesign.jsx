import React, { useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";

import {
  FaDownload,
  FaShoppingCart,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const Tshirtdesign = () => {
  const [shirtColor, setShirtColor] = useState("black");
  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("#ffffff");
  const [fontSize, setFontSize] = useState(20);
  const [textAlign, setTextAlign] = useState("center");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

  const changeColor = (color) => setShirtColor(color);

  const adjustFontSize = (change) => {
    setFontSize((prev) => Math.max(1, Math.min(prev + change, 72)));
  };

  return (
    <div className=" flex flex-col bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <h1 className="text-xl font-bold flex items-center gap-2">
          👕 <span className="text-blue-600">T-Shirt Designer</span>
        </h1>
        {/* <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          <FaDownload size={18} /> Download Design
        </button> */}
      </header>

      {/* Main Section */}
      <main className="flex flex-row max-[768px]:flex-col justify-center gap-6 p-6 w-full ">
        {/* Shirt Display */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex justify-center items-center w-1/2 max-[768px]:w-full">
          <div className="relative">
            <img
              src={`/shirt-${shirtColor}.png`}
              alt="Shirt"
              className="w-[350px] md:w-[450px] h-auto"
            />
            <div
              className="absolute top-1/3 left-0 right-0 mx-auto px-2"
              style={{
                color: textColor,
                fontSize: `${fontSize}px`,
                fontWeight: isBold ? "bold" : "normal",
                fontStyle: isItalic ? "italic" : "normal",
                textAlign, // works now
                width: "35%", // fixed width
                wordWrap: "break-word",
              }}
            >
              {text}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col w-1/2 max-[768px]:w-full">
          <h2 className="text-sm mr-auto font-semibold mb-4">Shirt Variant</h2>
          <div className="flex gap-3 mb-4">
            {["yellow", "purple", "green", "black", "gray"].map((color) => (
              <button
                key={color}
                onClick={() => changeColor(color)}
                className="w-8 h-8 rounded-full border shadow"
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>

          <hr className="my-4 border-[#8c8c8c]" />

          <h3 className="text-sm mr-auto font-semibold mb-2">Customize Text</h3>
          <textarea
            className="w-full border border-[#8c8c8c] rounded-lg p-2 mb-4"
            placeholder="Write something!"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="flex items-center gap-2 mb-4">
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="w-10 h-9 p-1 border border-[#8c8c8c] rounded"
            />

            <button
              onClick={() => setIsBold(!isBold)}
              className={`px-3 py-2 border border-[#8c8c8c] rounded flex items-center justify-center ${
                isBold ? "bg-gray-200" : ""
              }`}
            >
              <FormatBoldIcon style={{ fontSize: 20 }} />
            </button>

            <button
              onClick={() => setIsItalic(!isItalic)}
              className={`px-3 py-2 border border-[#8c8c8c] rounded flex items-center justify-center ${
                isItalic ? "bg-gray-200" : ""
              }`}
            >
              <FormatItalicIcon style={{ fontSize: 20 }} />
            </button>

            <button
              onClick={() => setTextAlign("left")}
              className="px-3 py-2 border border-[#8c8c8c] rounded flex items-center justify-center"
            >
              <FormatAlignLeftIcon style={{ fontSize: 20 }} />
            </button>

            <button
              onClick={() => setTextAlign("center")}
              className="px-3 py-2 border border-[#8c8c8c] rounded flex items-center justify-center"
            >
              <FormatAlignCenterIcon style={{ fontSize: 20 }} />
            </button>

            <button
              onClick={() => setTextAlign("right")}
              className="px-3 py-2 border border-[#8c8c8c] rounded flex items-center justify-center"
            >
              <FormatAlignRightIcon style={{ fontSize: 20 }} />
            </button>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm">Font Size:</span>
            <button
              onClick={() => adjustFontSize(-2)}
              className="px-2 py-1 border border-[#8c8c8c] rounded"
            >
              -
            </button>
            <input
              type="number"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-16 border border-[#8c8c8c] rounded px-2 py-1 text-center"
            />
            <button
              onClick={() => adjustFontSize(2)}
              className="px-2 py-1 border border-[#8c8c8c] rounded"
            >
              +
            </button>
          </div>

          <button className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition">
            <FaShoppingCart size={18} /> Add to Cart
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-between items-center px-5 bg-white py-4 text-center text-sm text-gray-600 mt-6">
        <p>© 2024 T-Shirt Designer. All Rights Reserved.</p>
        <div className="flex justify-center gap-6 mt-2 text-xl">
          <a href="#" className="hover:text-blue-500">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-blue-700">
            <FaFacebookF />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Tshirtdesign;
