import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Project } from "./Project"
import { Skill } from "./Skill"

export const Allroute=()=>{
    return <div>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/skill" element={<Skill/>}/>
    <Route path="/project" element={<Project/>}/>
</Routes>
    </div>
}