import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate();
  const handleLogin = ()=>{
    navigate('/dashboard');
  }
  return (
    <section className="flex justify-center items-center">
      <Button variant="contained" style={{marginLeft:200}} onClick={handleLogin}>login</Button>
    </section>
  )
}

export default Home