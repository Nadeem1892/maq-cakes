import React from "react";

// Define the props interface
interface AtmStatusCardProps {
  imageSrc: string;
  altText?: string; // Optional altText
  label: string;
  onClick?: () => void; // Optional click handler
}

const AtmStatusCard: React.FC<AtmStatusCardProps> = ({
  imageSrc,
  altText,
  label,
  onClick,
}) => {
  return (
   <div className="flex flex-col items-center gap-2 text-center">
     <div className="flex flex-col items-center justify-center w-20 h-20 border-2 rounded-full cursor-pointer"
    onClick={onClick} // Allow passing an onClick handler for interactivity
    >
      <img
        className="object-cover rounded-full"
        src={imageSrc}
        alt={altText || "Image"} // Provide a default alt text if altText is not passed
      />
    </div>
   <label className="text-[16px] font-semibold  text-gray-700" htmlFor="">{label}</label>
   </div>
  );
};

export default AtmStatusCard;
