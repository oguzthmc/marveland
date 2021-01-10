import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

const Footer = ({ items }) => {
  return (
    <div className="footer">
      <p className="social"><a href="https://github.com/oguzthmc/marveland" target="!#"><AiFillGithub /></a></p>
      <span className="author">Developed by Oğuzhan Tohumcu</span>
      <p className="copyright">{items.attributionText}</p>
    </div>
  )
}

export default Footer
