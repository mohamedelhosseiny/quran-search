import { ref } from "vue";

export const useFeed = () => {
  const tweets = ref<string[]>([
    '🧵 Here’s a summary of the first 25 pages of *"What Every Programmer Should Know About Memory"* by Ulrich Drepper. Let’s break it down! 🧠💻',
    "📄 **Introduction**: Memory access is a bottleneck for most programs. CPU caches help, but programmers need to understand how to use them effectively. Hardware advancements like RAM design, memory controllers, and DMA are key.",
    "🏗️ **Commodity Hardware**: Modern systems use many smaller, connected computers instead of a few large ones. Standard systems have up to 64 virtual processors. Northbridge (memory controller) and Southbridge (I/O) handle CPU, RAM, and device communication.",
    "🚦 **Memory Bottlenecks**: Access to RAM and DMA operations can cause contention. Memory access patterns and multiple memory channels affect performance. NUMA (Non-Uniform Memory Access) systems add complexity due to varying access times.",
    "🔧 **RAM Types**: SRAM is fast (no refresh cycles) but expensive. DRAM is cheaper but slower and requires constant refreshing. DRAM cells are organized in rows and columns, accessed via RAS (Row Access Strobe) and CAS (Column Access Strobe) signals.",
    "⏱️ **DRAM Access**: DRAM access involves delays like **RAS-to-CAS delay** and **CAS latency**. Precharging and refreshing cycles add overhead. DDR SDRAM improves throughput by transferring data on both clock edges (double-pumping).",
    "📊 **Memory Performance**: Access patterns and concurrency affect memory performance. **Sequential access** benefits from spatial locality, while **random access** suffers due to cache line evictions. Multiple memory controllers and channels can increase bandwidth.  ",
    "🧩 **CPU Caches**: CPUs use caches (L1, L2, L3) to speed up memory access. Cache hits are fast, but misses are costly. Cache coherence protocols like **MESI** (Modified, Exclusive, Shared, Invalid) ensure data consistency across cores.",
    "🔍 **Cache Associativity**: Caches can be **direct-mapped**, **fully associative**, or **set-associative**. Higher associativity reduces cache misses but increases complexity. Cache size and associativity impact performance.",
    "📈 **Cache Performance**: Larger caches reduce misses but increase latency. Multi-core processors share caches, which can lead to contention. **Hyper-threading** can improve performance but requires careful cache management to avoid contention.  ",
    "🔄 **TLB (Translation Lookaside Buffer)**: The TLB caches virtual-to-physical address translations. TLB misses are costly, so large pages and efficient page table walks are important.",
    "💡 **Virtual Memory**: Virtual memory allows processes to use more memory than physically available. Page tables map virtual addresses to physical addresses. Multi-level page tables reduce memory usage for sparse address spaces.  ",
    "🛠️ **Page Table Optimization**: The OS manages page tables, and the CPU uses the TLB to speed up address translation. Large pages reduce TLB misses, but memory fragmentation can be an issue.",
    "🌐 **NUMA (Non-Uniform Memory Access)**: NUMA systems have varying memory access times depending on the processor’s location. OS and applications need to optimize for **local memory access** to avoid performance penalties.",
    "📉 **NUMA Performance**: Accessing remote memory is slower than local memory. The OS can migrate processes or memory pages to optimize performance. NUMA factors (access costs) vary based on system architecture.",
    "🔗 **Hypercubes and Interconnects**: NUMA systems use interconnects like **HyperTransport**. Hypercube topologies minimize the distance between nodes, reducing access times. Larger systems may use crossbars or specialized interconnects.",
    "📋 **OS Support for NUMA**: The OS tries to allocate memory locally to the processor running the process. **Memory striping** can balance memory usage but may not be optimal. Process migration and page migration are used to optimize performance.",
    "📊 **Cache and Memory Bandwidth**: Measuring memory bandwidth shows the impact of cache usage. Sequential access is faster than random access. **Non-temporal writes** bypass the cache, improving performance for large data structures.",
    "🚀 **Non-Temporal Writes**: Non-temporal writes avoid caching data that won’t be reused soon. **Write-combining buffers** help optimize these writes. SSE instructions like `_mm_stream_si128` are used for non-temporal writes.",
    "🧮 **Matrix Multiplication Example**: Optimizing matrix multiplication by **transposing the matrix** improves cache locality. Unrolling loops and aligning data to cache lines further enhances performance.",
    "📏 **Cache Line Size**: Knowing the cache line size is crucial for optimization. Programs can query the cache line size at runtime or compile time to align data structures and loops accordingly.",
    "🔧 **Code Optimization**: Optimizing code for cache usage involves improving **spatial and temporal locality**. Aligning data and code to cache lines reduces misses. Unrolling loops and reordering operations can also help.",
    "📉 **Performance Impact of Cache Misses**: Cache misses significantly impact performance, especially in multi-core systems. Reducing cache contention and optimizing data access patterns are key to improving performance.",
    "🔄 **TLB Performance**: TLB misses are costly, so using **large pages** and reducing the number of page table levels can improve performance. The OS and applications should minimize TLB flushes and reuse TLB entries.",
    "🌐 **Virtualization and Memory**: Virtualization adds another layer of memory management. **Shadow page tables** and **nested page tables (EPT/NPT)** are used to handle virtual-to-physical address translation in virtualized environments.",
    "🔚 **Conclusion**: Understanding memory hierarchy, cache behavior, and NUMA is crucial for optimizing program performance. Programmers should focus on improving locality, aligning data, and minimizing cache/TLB misses.",
  ]);

  return {
    tweets,
  };
};
