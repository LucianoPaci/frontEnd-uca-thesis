/**
 * Simple Inventory API
 * This is a simple API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import ProjectRequiredProfessors from './ProjectRequiredProfessors';





/**
* The Project model module.
* @module model/Project
* @version 1.0.0
*/
export default class Project {
    /**
    * Constructs a new <code>Project</code>.
    * @alias module:model/Project
    * @class
    * @param projectId {String} 
    * @param title {String} 
    */

    constructor(projectId, title) {
        

        
        

        this['projectId'] = projectId;this['title'] = title;

        
    }

    /**
    * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Project} obj Optional instance to populate.
    * @return {module:model/Project} The populated <code>Project</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Project();

            
            
            

            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('requiredProfessors')) {
                obj['requiredProfessors'] = ApiClient.convertToType(data['requiredProfessors'], [ProjectRequiredProfessors]);
            }
            if (data.hasOwnProperty('expirationDate')) {
                obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], 'Date');
            }
            if (data.hasOwnProperty('requiredSkills')) {
                obj['requiredSkills'] = ApiClient.convertToType(data['requiredSkills'], ['String']);
            }
        }
        return obj;
    }

    /**
    * @member {String} projectId
    */
    projectId = undefined;
    /**
    * @member {String} title
    */
    title = undefined;
    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {Array.<module:model/ProjectRequiredProfessors>} requiredProfessors
    */
    requiredProfessors = undefined;
    /**
    * @member {Date} expirationDate
    */
    expirationDate = undefined;
    /**
    * @member {Array.<String>} requiredSkills
    */
    requiredSkills = undefined;








}


