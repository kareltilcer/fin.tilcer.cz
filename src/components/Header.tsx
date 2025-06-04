import {useAtom} from "jotai/react";
import {tokenAtom} from "../atomStore.ts";
import {isJwtValid} from "../utils/isJwtValid.ts";
import {fetchMe} from "../api/me.ts";
import Login from "./Login.tsx";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {Avatar, Button, Layout, Popover} from "antd";
import {RESET} from 'jotai/utils'

const {Header: AntHeader} = Layout;

const Header = () => {
    const [token, setToken] = useAtom(tokenAtom);
    const queryClient = useQueryClient();

    const tokenValid = isJwtValid(token);

    const {data: userData} = useQuery({
        queryKey: ['fetchMe'],
        queryFn: () => fetchMe(token),
        enabled: tokenValid,
    })

    const handleLogout = async () => {
        queryClient.clear()
        setToken(RESET)
    }

    return (
        <AntHeader style={{
            background: '#000000',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            <nav style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                {/*<NavLink style={{color: '#000', fontSize: '24px', textDecoration: 'none', padding: '20px'}} to={"/"}>Meal Plan</NavLink>*/}
                {/*<NavLink style={{color: '#000', fontSize: '24px', textDecoration: 'none', padding: '20px'}} to={"/cook-book"}>Cook Book</NavLink>*/}
                {/*{tokenValid && <NavLink style={{color: '#000', fontSize: '24px', textDecoration: 'none', padding: '20px'}} to={"/shopping-list"}>Shopping list</NavLink>}*/}
            </nav>
            <div>
                {tokenValid
                    ?
                    <Popover
                        content={
                            <Button onClick={handleLogout} block={true}>Logout</Button>
                        }
                        title={`${userData?.firstName} ${userData?.lastName}`}
                        trigger="click">
                        <Avatar size={40} style={{cursor: "pointer", border: "1px solid #f0f0f0"}}>
                            {`${userData?.firstName.charAt(0).toUpperCase()}${userData?.lastName.charAt(0).toUpperCase()}`}
                        </Avatar>
                    </Popover>
                    : <Login/>
                }
            </div>
        </AntHeader>
    );
}

export default Header;