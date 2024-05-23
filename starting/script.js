

export const value = () => {
  return {
    restrict: 'E',
    scope: {
      title: '@'
      },
      template: '<h1>{{title}}</h1>'
      }
}