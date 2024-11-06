import Profile from './components/Profile'

export default function App() {
  return( 
        <div>
          <Profile 
           img={'./luis.png'}
           name={'Luis Eduardo Lima do Nascimento'} 
           bio={'Estou cursanso 2º Série em Desenvolvimento de Sistemas'} 
           contact={'+ 55 (85) 99161-1753'} 
           email={'le2158509@gmail.com'} 
           githubUrl={'https://github.com/luiseduardo010'} 
           instagramUrl={'https://instagram.com/luis.edu4ardo'} 
           />
        </div> 
   
  )
}