import { FloatingWhatsApp } from 'react-floating-whatsapp'


export const Footer = () => {
  return (
    <footer className="text-center">
        <hr />
        <FloatingWhatsApp
            phoneNumber="+5491136756030"
            accountName='Atmosfericos'
            chatMessage='Hola! En que te podemos ayudar?'
            messageDelay={1}
        />
        <p className="text-center py-5">Creado por <span className="font-black"><a href="https://www.agwebstores.com/">@AgWebStores</a></span></p>
    </footer>
  )
}
