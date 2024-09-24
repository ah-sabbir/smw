import React from 'react'

const about_layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <html>
        <head>
            <title>this is about us page</title>
        </head>
        <body>
            {children}
        </body>
    </html>
  )
}

export default about_layout;

