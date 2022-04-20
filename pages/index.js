import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import SignIn from '../components/Signin'
import SignUp from '../components/Signup'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <SignIn />
      <SignUp /> */}
      <Footer/>
    </>
    )
}
