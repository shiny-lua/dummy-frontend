import Header from "./header";      

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-primary">
            <Header /> 
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;  