export const SHOW_ETL_STAGES_FIELDS = {
  pipeline_config_field: ['pipelineId', 'title', 'description', 'constants'],
  com_streamsets_pipeline_stage_origin_spooldir_SpoolDirDSource: ['dataFormat', 'compression', 'spoolDir',
    'pathMatcherMode', 'filePattern', 'useLastModified', 'processSubdirectories', 'batchSize',
    'errorArchiveDir', 'postProcessing', 'archiveDir', 'useCustomDelimiter', 'customDelimiter', 'includeCustomDelimiterInTheText', 'jsonContent',
    'jsonMaxObjectLen', 'csvFileFormat', 'csvHeader', 'csvCustomDelimiter', 'csvCustomEscape', 'csvCustomQuote', 'excelHeader', 'csvIgnoreEmptyLines'],
  com_streamsets_pipeline_stage_processor_jdbclookup_JdbcLookupDProcessor: ['connectionString', 'driverClassName',
    'useCredentials', 'query',
    'columnMappings', 'multipleValuesBehavior', 'missingValuesBehavior',
    'autoCommit', 'readOnly', 'enabled', 'username', 'maxSize', 'transactionIsolation',
    'password', 'evictionPolicyType', 'expirationTime', 'timeUnit', 'retryOnCacheMiss', 'driverProperties'],
  com_streamsets_pipeline_stage_executor_finishpipeline_PipelineFinisherDExecutor: ['stageRecordPreconditions'],
  com_streamsets_pipeline_stage_executor_jdbc_JdbcQueryDExecutor: ['connectionString', 'driverClassName', 'useCredentials', 'query', 'stageRecordPreconditions',
    'batchCommit', 'autoCommit', 'transactionIsolation', 'username', 'password'],
  com_streamsets_pipeline_stage_processor_selector_SelectorDProcessor: ['lanePredicates'],
  com_streamsets_pipeline_stage_processor_fieldreplacer_FieldReplacerDProcessor: ['rules'],
  com_streamsets_pipeline_stage_processor_fieldtypeconverter_FieldTypeConverterDProcessor: ['convertBy', 'fieldTypeConverterConfigs', 'wholeTypeConverterConfigs'],
  com_streamsets_pipeline_stage_destination_jdbc_JdbcDTarget: ['connectionString', 'driverClassName',
    'useCredentials', 'schema', 'tableNameTemplate', 'columnNames', 'defaultOperation', 'unsupportedAction', 'rollbackOnError',
    'transactionIsolation', 'username', 'password'],
  com_streamsets_pipeline_stage_processor_groovy_GroovyDProcessor: ['processingMode', 'initScript', 'script', 'destroyScript']
};
