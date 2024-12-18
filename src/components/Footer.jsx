import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="footer mt-12 shadow-xl footer-center bg-base-300 text-base-content p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Joel Josy</p>
            </aside>
        </footer>
    </div>
  )
}
