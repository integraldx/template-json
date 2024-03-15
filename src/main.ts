import * as core from '@actions/core'
import { object } from 'json-templater'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const template_tring: string = core.getInput('template')
    const values_string: string = core.getInput('values')

    const template = JSON.parse(template_tring)
    const values = JSON.parse(values_string)

    const rendered_object = object(template, values)

    core.setOutput('rendered', JSON.stringify(rendered_object))
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
