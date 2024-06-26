export interface Handler {
  (req: Request): Promise<Response>
}

export interface HandlerOptions {
  /** Maximum size in bytes of a batch request to the bucket. */
  maxBatchSize?: number
}

export interface Bucket {
  head (key: string): Promise<Omit<BucketObject, 'body'> | null>
  get (key: string, options?: GetOptions): Promise<BucketObject | null>
}

export interface GetOptions {
  range?: { offset: number, length: number }
}

export interface BucketObject {
  readonly httpEtag: string
  readonly size: number
  readonly body: ReadableStream | null
}