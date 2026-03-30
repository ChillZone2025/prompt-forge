import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0f1117',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    }}>
      <SignUp
        appearance={{
          elements: {
            rootBox: { width: '100%', maxWidth: 440 },
          },
        }}
      />
    </div>
  )
}
