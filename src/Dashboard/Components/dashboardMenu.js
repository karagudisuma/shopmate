import React, { Component } from "react";
import "../Styles/style.scss";
import { withErrorBoundary } from "../../ErrorPage";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const DashboardMenuWomen = () => {
    return (
        <div className="menu-container">
            <h1 className="menu-header">Women's wear</h1>
            <div className="menu-list">
                <ul>
                    <li>Hoodies</li>
                    <li>Jackets & Coats</li>
                    <li>Jeans</li>
                    <li>Joggers</li>
                    <li>Jumpers & Cardigans</li>
                    <li>Jewellery</li>
                </ul>
                <ul>
                    <li>Leather Jackets</li>
                    <li>Long sleeve T-Shirt</li>
                    <li>Loungewear</li>
                    <li>Oversized & Longline</li>
                    <li>Shirts</li>
                    <li>Polo Shirts</li>
                </ul>
                <ul>
                    <li>Caps</li>
                    <li>ASOS Basic Tops</li>
                    <li>Accessories</li>
                    <li>Gifts</li>
                    <li>Grooming</li>
                    <li>Bags</li>
                </ul>
            </div>
        </div>
    )
}