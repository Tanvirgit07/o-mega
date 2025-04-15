import BottomHeader from "./BottomHeader"
import MiddleHeader from "./MiddleHeader"
import TopHeader from "./TopHeader"

const Header = () =>{
    return <div className="sticky top-0 z-50 bg-white">
        <TopHeader />
        <MiddleHeader />
        <BottomHeader />
    </div>
}

export default Header