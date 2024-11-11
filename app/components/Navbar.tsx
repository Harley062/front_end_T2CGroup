import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/admin/superadmin">Superadmin</Link></li>
        <li><Link href="/admin/admin">Admin</Link></li>
        <li><Link href="/chat">Chat</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
