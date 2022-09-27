import { Route, Routes } from "react-router-dom"
import { Contact } from "./Contact"
import { Home } from "./Home"
import { Project } from "./Project"
import { Skill } from "./Skill"

export const Allroute=()=>{
    return <div>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/skill" element={<Skill/>}/>
    <Route path="/project" element={<Project/>}/>
    <Route path="/contact" element={<Home/>}/>
</Routes>
    </div>
}