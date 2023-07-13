import RootLayout from "@/app/layout"
import Table from "../../components/users/Table"
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
interface User{
    id:string;
    name:string;
    email:string;
}
interface Request{
    success:boolean;
    message:string;
    data:Array<User>
}
export default function Users(){
    const coluns = ['ID', 'Name', 'Email', 'Edit', 'Delete']
    const [users, setUsers] = useState<User[]>([]);
    useEffect(()=>{
        try{
            const next = (data:Request)=>{
                if(data.success){
                    setUsers(data.data)
                }
            }
            axios
                .get('api/users/getUsers')
                .then((response)=>next(response.data))
        }
        catch(error){
            console.error('failed to axios', error)
        }
    }, [])
    
    return(
        <RootLayout>
            <section>
                <h3>Users Page</h3>
                <Table coluns={coluns} users={users}></Table>
                <p className="bg-gradient-to-b mt-4 from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                  <Link href="/">
                    Return main page  
                  </Link>
                </p>
            </section>
        </RootLayout>
    )
}