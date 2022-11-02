import Link from 'next/link';

export default function DashboardLayout({children}: {
    children: React.ReactNode
}) {
    return <>
        <aside className='w-64 bg-cyan-100 rounded-xl m-4'>
            <nav>
                <ul className='gap-4 flex flex-col p-4'>
                    <li><Link href="/dashboard/account">Account</Link></li>
                    <li><Link href="/dashboard/settings">Settings</Link></li>
                </ul>
            </nav>
        </aside>
        <main className='p-4'>{children}</main>
    </>;
}