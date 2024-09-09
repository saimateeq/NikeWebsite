import { createSlice } from "@reduxjs/toolkit";
import Shoe1Face1 from "../images/Shoe-1-face-1.png"
import Shoe2Face1 from "../images/Shoe-2-face-1.png"
import Shoe3Face1 from "../images/Shoe-3-face-1.png"
import Shoe4Face1 from "../images/Shoe-4-face-1.png"
import Shoe5Face1 from "../images/Shoe-5-face-1.png"
import Shoe6Face1 from "../images/Shoe-6-face-1.png"
import Shoe7Face1 from "../images/Shoe-7-face-1.png"
import Shoe8Face1 from "../images/Shoe-8-face-1.png"
import Shoe1Face2 from "../images/Shoe-1-face-2.png"
import Shoe2Face2 from "../images/Shoe-2-face-2.png"
import Shoe3Face2 from "../images/Shoe-3-face-2.png"
import Shoe4Face2 from "../images/Shoe-4-face-2.png"
import Shoe5Face2 from "../images/Shoe-5-face-2.png"
import Shoe6Face2 from "../images/Shoe-6-face-2.png"
import Shoe7Face2 from "../images/Shoe-7-face-2.png"
import Shoe8Face2 from "../images/Shoe-8-face-2.png"
import Shoe1Face3 from "../images/Shoe-1-face-3.png"
import Shoe2Face3 from "../images/Shoe-2-face-3.png"
import Shoe3Face3 from "../images/Shoe-3-face-3.png"
import Shoe4Face3 from "../images/Shoe-4-face-3.png"
import Shoe5Face3 from "../images/Shoe-5-face-3.png"
import Shoe6Face3 from "../images/Shoe-6-face-3.png"
import Shoe7Face3 from "../images/Shoe-7-face-3.png"
import Shoe8Face3 from "../images/Shoe-8-face-3.png"

export const ShoesSlice = createSlice({
    name: 'Shoes',
    initialState: {
        value : [
            { Link: Shoe1Face1, Discription: { Name: "item1", Price: "$200", Colours: ["bg-red-700", "bg-white", "bg-green-700"], Size: ["sm", "md", "lg", "xl"] }, Face: [Shoe1Face1, Shoe1Face2, Shoe1Face3], Position: { top: "auto", left: "0", }, RingGradient: "darkBlue,white,skyBlue", BgGradient: "lightBlue" },
            { Link: Shoe2Face1, Discription: { Name: "item2", Price: "$220", Colours: ["bg-red-700", "bg-white", "bg-green-700"], Size: ["sm", "md", "lg", "xl"] }, Face: [Shoe2Face1, Shoe2Face2, Shoe2Face3], Position: { top: "18%", left: "10%", }, RingGradient: "yellow,greenYellow,Green", BgGradient: "lightGreen" },
            { Link: Shoe3Face1, Discription: { Name: "item3", Price: "$140", Colours: ["bg-red-700", "bg-white", "bg-green-700"], Size: ["sm", "md", "lg", "xl"] }, Face: [Shoe3Face1, Shoe3Face2, Shoe3Face3], Position: { top: "7%", left: "37%", }, RingGradient: "black,white,gray", BgGradient: "lightGray" },
            { Link: Shoe4Face1, Discription: { Name: "Nike Zoom Vomero 5", Price: "$160", Colours: ["bg-brown-500", "bg-white", "bg-blue-700"], Size: ["sm", "md", "lg", "xl"] }, Face: [Shoe4Face1, Shoe4Face2, Shoe4Face3], Position: { top: "18%", left: "65%" }, RingGradient: "chocolate,wheat", BgGradient: "wheat" },
            { Link: Shoe5Face1, Discription: { Name: "item5", Price: "$120", Colours: ["bg-red-700", "bg-white", "bg-green-700"], Size: ["sm", "md", "lg", "xl"] }, Face: [Shoe5Face1, Shoe5Face2, Shoe5Face3], Position: { top: "auto", left: "75%", }, RingGradient: "pink,red,purple", BgGradient: "hotPink" },
            { Link: Shoe6Face1, Discription: { Name: "item6", Price: "$250", Colours: ["bg-red-700", "bg-white", "bg-green-700"], Size: ["sm", "md", "lg", "xl"] }, Face: [Shoe6Face1, Shoe6Face2, Shoe6Face3], Position: { top: "70%", left: "65%", }, RingGradient: "white,green,white", BgGradient: "paleGreen" },
            { Link: Shoe7Face1, Discription: { Name: "item7", Price: "$100", Colours: ["bg-red-700", "bg-white", "bg-green-700"], Size: ["sm", "md", "lg", "xl"] }, Face: [Shoe7Face1, Shoe7Face2, Shoe7Face3], Position: { top: "82%", left: "37%", }, RingGradient: "white,lightGray", BgGradient: "lightGray" },
            { Link: Shoe8Face1, Discription: { Name: "item8", Price: "$180", Colours: ["bg-red-700", "bg-white", "bg-green-700"], Size: ["sm", "md", "lg", "xl"] }, Face: [Shoe8Face1, Shoe8Face2, Shoe8Face3], Position: { top: "70%", left: "10%", }, RingGradient: "darkRed,coral", BgGradient: "lightSalmon" },
        ]
    },
    reducers: {
        setShoes: (state, action) => {
            state.value = action.payload
        },
    },
})
export const { setShoes } = ShoesSlice.actions
export default ShoesSlice.reducer