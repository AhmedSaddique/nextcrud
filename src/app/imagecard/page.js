"use client";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home({ cardsDataProp }) {
  const [cardsData, setCardsData] = useState(cardsDataProp || []);
  const router = useRouter();
  console.log(cardsData);
  const fetchdata = async () => {
    try {
      const response = await axios.get("/api/imagecard");
      setCardsData(response.data.card);
      console.log("API response:", response.data.card);
    } catch (error) {
      console.error("There was an error fetching the data:", error);
    }
  };
  console.log();
  useEffect(() => {
    fetchdata();
  }, []);

  const deleteCard = async (cardId) => {
    // Show confirmation dialog
    const isConfirmed = confirm("Are you sure you want to delete this card?");

    if (isConfirmed) {
      try {
        await axios.delete(`/api/imagecard/${cardId}`); // Adjust the API endpoint as needed
        setCardsData(cardsData.filter((card) => card.id !== cardId)); // Remove the card from state
        router.push("/imagecard");
      } catch (error) {
        console.error("Error deleting the card:", error);
        // Optionally, show an error alert here
        alert("Failed to delete the card.");
      }
    }
  };

  const handleEdit = (cardId) => {
    router.push(`/updateimagecard?cardId=${cardId}`);
  };

  return (
    <>
      <div className=" w-full md:w-7/12 mx-auto h-96 ">
        {Array.isArray(cardsData) &&
          cardsData.map((card, index) => (
            // Render your card data here
            <div
              key={index}
              className="border-2 mt-2 mb-2 p-2 rounded-lg flex justify-between"
            >
              <div className="w-11/12">
              
                  <img
                    width={500 }
                    height={500}
                    className={`w-44 h-44 pt-5 rounded-full`}
                    src={`${card.img.replace("public/", "")}`} // Assuming card.img is the path relative to the public directory
                    alt="card image"
                  />
                <h1 className="text-2xl font-bold text-gray-800 mt-5">
                  {card.heading}
                </h1>
                <p>{card.para}</p>
              </div>
              <div className="w-1/12 flex gap-2 justify-end">
                <MdDelete size={20} onClick={() => deleteCard(card.id)} />
                <FaEdit size={20} onClick={() => handleEdit(card.id)} />
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

{
  /* <img className="rounded-full" width={150} height={150} src={'/uploads/WallpaperDog-10773325.jpg'} alt="card image" /> */
}
