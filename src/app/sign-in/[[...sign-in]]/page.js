import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0f1117',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    }}>
      <SignIn
        appearance={{
          elements: {
            rootBox: { width: '100%', maxWidth: 440 },
          },
        }}
      />
    </div>
  )
}
