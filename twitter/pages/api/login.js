export default function LoginPage(providers) {
    return (
        <div className="flex items-center justify-center h-screen">
            {Object.values(providers).map(provider => (
                <div>
                    <button className="">Sign in with {provider.name}</button>
                </div>
            ))}
        </div>
    );
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: { providers },
    }
}