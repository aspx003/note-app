"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


export default function Navbar() {

    const pathname = usePathname();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark mb-5" data-bs-theme="dark">
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <Link className="navbar-brand" href="/">
                    Great Notes
                </Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={"nav-link" + (pathname === '/all-cards' ? " active" : "")} aria-current="page" href="/all-cards">
                                All Cards
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link" + (pathname === '/about' ? " active" : "")} aria-current="page" href="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

