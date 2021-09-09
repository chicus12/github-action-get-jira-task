const pullRequestBody  = `
## Pull Request

#### What's this PR do?
- Se incluye en el sandbox formato de respuesta generico de API
- Se adapta en el cliente los queries a al tipo de respuesta generico
- Se pasa el componente de svgToIcon de js a ts

#### Dependencies?

#### How should this be manually tested?

#### Any background context you want to provide?

#### What are the relevant tickets (bugs/features)?
https://soinlabs.atlassian.net/browse/BOD-271
:task|esto es una prueba
:task|esto es otra prueba
#### Screenshots (if appropriate)
`

const attlasianTask = pullRequestBody.split('\n').map(line => {
      if(line.includes('atlassian.net')) {
        const task = line.substring(line.lastIndexOf('/') + 1)

        return `<${line}|${task}>`
      }


      if(line.includes(':task')){
        const [, task] = line.split('|')

        return task
      }

      return null
    }).filter(item => item!==null).join(', ')

    console.info('tassskkk',  attlasianTask)

      pull_request:
    types: [opened]
    branches:
      - '**'